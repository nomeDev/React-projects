import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({
        title,
        slug,
        content,
        featuredImage,
        status,
        userId,
    }) {
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log('Appwrite ::createPost :: error ', error);
        }
    }

    async updatePost(
        slug,
        { title, content, featuredImage, status }
    ) {
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                cong.collectionId,
                slug,
                {
                    titile,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log('appwrite :: updatePost :: error ', error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.collectionId,
                conf.databaseId,
                slug
            );
            return true;
        } catch (error) {
            console.log('Appwrite :: deletePost :: errro ', error);
            return false;
        }
    }
    async getPosts(slug) {
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );
        } catch (error) {
            console.log(
                'Appwrite service :: getpost :: error',
                error
            );
        }
    }
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                cong.databaseId,
                conf.collectionId,
                queries
            );
        } catch (error) {
            console.log(
                'Appwrite service :: getpost :: error ',
                error
            );
            return false;
        }
    }

    // file upload method
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log('Appwrite :: fileupload :: error ', error);
            return false;
        }
    }
    async delteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.bucketId, fileId);
            return true;
        } catch (error) {
            console.log(
                'Appwrite service :: deleteFile :: error ',
                error
            );
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(cong.bucketId, fileId);
    }
}

const service = new Service();

export default service;
