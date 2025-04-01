import React from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
    mutation CreateProfile($input: ProfileInput!) {
        createProfile(input: $input)
    }
`;

export default function UploadForm() {
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: (data) => {
            console.log(data);
        },
    });

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {

            uploadFile({ 

                variables: { 
                    input: {
                        file: file,
                        firstname:file.name,
                        lastname:file.name
                    },
                 },
                context: {
                    headers: {
                    "Apollo-Require-Preflight": "true",
                    },
                },
            });
        } catch (error) {
            console.error("Erreur lors de l'upload :", error);
        }
       
    };

    return <>
    <h1>Upload File</h1>
    <input type="file" onChange={handleUpload} />
    </>
}