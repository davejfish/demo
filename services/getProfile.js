import { client } from './client.js';

export async function getProfile(id) {
    const response = client
        .from('user-profile')
        .select('*')
        .eq('profile_id', id)
        .single();
    return response.data;
}

export async function upsertProfile(profile) {
    const response = await client
        .from('user-profile')
        .upsert(profile)
        .eq('profile_id', profile.profile_id)
        .single();
    return response;
}
