import client from './client.js';

export async function addWord(word, id) {
    const response = await client
        .from('user-profiles')
        .insert(word)
        .eq('profile_id', id)
        .single();

    return response.data;
}