import { client } from './client.js';

export async function getWords() {
    const response = client
        .from('words')
        .select(`*`,
            { count: 'exact' }
        );
    return response;
}

export async function getWord(id) {
    const response = client
        .from('words')
        .select('*')
        .eq('id', id)
        .single();
    
    return response;
}