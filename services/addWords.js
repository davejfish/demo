import { client } from './client.js';

export async function addWord(data) {
    const response = await client
        .from('words_to_profiles')
        .insert([
            {
                word_id: data.word_id,
                profile_id: data.profile_id
            }
        ])
        .single();

    return response;
}

export async function getLinkedTable() {
    const response = await client
        .from('words_to_profiles')
        .select(`*, 
            words (*)`);
    return response.data;
}

export async function getUserWords(id) {
    const response = await client
        .from('words_to_profiles')
        .select(`*, 
            words (*)`)
        .eq('profile_id', id);
    return response.data;
}

export async function deleteSnack(id) {
    const response = await client
        .from('words_to_profiles')
        .delete()
        .eq('id', id)
        .single();
    return response.data;
}