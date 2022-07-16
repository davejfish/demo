import { client } from './client.js';

export async function getWords() {
    const response = client
        .from('words')
        .select(`*`,
            { count: 'exact' }
        );
    return response;
}