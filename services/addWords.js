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