import {useState, useEffect} from 'react'
import db, { projectStorage, timestamp } from 'Configs/Firebase.js'

import { useStateValue } from 'Context/StateProvider'

const useStorage = (file, text = null) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        // references as to where the file is going to be stored
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = db.collection('posts');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = ( snap.bytesTransferred / snap.totalBytes ) * 100;
            setProgress(percentage);
        }, 
        err => setError(err), 
        async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();

            const fileType = file.type.split("/")[0];

            const media = {
                type: fileType,
                url: url
            } 

            const postData = {
                author: {
                    id: 3,
                    name: user.displayName,
                    profile_img: "user.jpg",
                    role: "Tutee",
                    department: "Software Development"
                },
                body: {
                    media: media,
                    text: text
                },
                comments: 0,
                likes: 0,
                datetime: createdAt
            }

            collectionRef.add(postData);
            
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;