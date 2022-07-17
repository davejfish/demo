import { client } from './client.js';

export async function addWord(word, id) {
    const response = await client
        .from('user-profile')
        .update({ snacks: word })
        .eq('profile_id', id)
        .single();

    return response;
}