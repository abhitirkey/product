import {useState, useEffect} from 'react'
import db from 'Configs/Firebase'

const useFirestore = collection => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
       
        const unsub = db.collection(collection)
            .orderBy('datetime', 'desc')
            .onSnapshot(snapshot => {
            
            const documents = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            });

            setDocs(documents);
        });

        return () => unsub();

    }, [collection])

    return docs
}

export default useFirestore;