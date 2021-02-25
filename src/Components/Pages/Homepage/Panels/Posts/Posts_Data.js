import Image1 from './Media/1.jpg'
import Image2 from './Media/2.jpg'
import ProfilePic from './Media/profile_pic.jpg'

const Posts_Data = [
    {
        "id" : 1,
        "author": {
            "id": 123,
            "name": "John Hagee",
            "profile_img": ProfilePic,
            "role": "Tyutee",
            "department": "Information Sciences"
        },
        "datetime": "2021-02-18T12:00:00Z",
        "body": {
            "text": "This is a pretty cool thing I just saw today.",
            "media": {
                "image": Image1
            } 
        },
        "likes": 5,
        "comments": 10
    },
    {
        "id" : 2,
        "author": {
            "id": 123,
            "name": "John Hagee",
            "profile_img": ProfilePic,
            "role": "Tyutee",
            "department": "Information Sciences"
        },
        "datetime": "2021-02-15T12:00:00Z",
        "body": {
            "text": "Yo how's it going?",
            "media": {
                "image": Image2
            } 
        },
        "likes": 5,
        "comments": 10
    }
];

export default Posts_Data;