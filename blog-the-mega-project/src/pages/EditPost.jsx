import React, { useState } from 'react';
import AppwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';
//
export default function EditPost() {
    const [post, setPosts] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            AppwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);
    //
    return post ? (
        <Container>
            <PostForm />
        </Container>
    ) : null;
}
