

import React, { useState } from 'react';
import axios from 'axios';

export default function File() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState(null); // File preview
    const [uploadProgress, setUploadProgress] = useState(0); // Progress tracking

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Restrict file size to 5MB
            if (selectedFile.size > 5 * 1024 * 1024) {
                setMessage('File size should not exceed 5MB');
                setFile(null);
                setPreview(null);
                return;
            }
            
            // Restrict file type
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            if (!validTypes.includes(selectedFile.type)) {
                setMessage('Only JPG, PNG, and PDF files are allowed');
                setFile(null);
                setPreview(null);
                return;
            }

            setFile(selectedFile);
            setMessage('');

            // If the file is an image, show a preview
            if (selectedFile.type.startsWith('image')) {
                setPreview(URL.createObjectURL(selectedFile));
            } else {
                setPreview(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file first!');
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append('file', file);

        try {
            setMessage('');
            setUploadProgress(0);

            // Axios request with progress indicator
            const response = await axios.post('https://client-communication-and-feedback.onrender.com/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                },
            });

            setMessage(response.data.message || 'File uploaded successfully');
            setFile(null);
            setPreview(null);
            setUploadProgress(0);
        } catch (err) {
            setMessage(err.response?.data?.error || 'File upload failed');
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
            <h2>File Upload</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                />
                {preview && (
                    <div style={{ marginTop: '10px' }}>
                        <p>Preview:</p>
                        <img
                            src={preview}
                            alt="Selected File Preview"
                            style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                    </div>
                )}
                <button
                    type="submit"
                    style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
                >
                    Upload
                </button>
            </form>
            {uploadProgress > 0 && (
                <div style={{ marginTop: '10px' }}>
                    <p>Uploading: {uploadProgress}%</p>
                    <progress value={uploadProgress} max="100" style={{ width: '100%' }} />
                </div>
            )}
            {message && <p style={{ marginTop: '10px', color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>}
        </div>
    );
}
