import supabase from "../utils/database.js"

const PromptOptionsService = {
    async getCOT() {
        let { data, error } = await supabase
        .from('COT')
        .select('summary, cot')
        return data
    }

}

export { PromptOptionsService };