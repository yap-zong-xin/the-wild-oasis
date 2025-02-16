import toast from "react-hot-toast";
import supabase from "./supabase";

const isDemo = import.meta.env.VITE_IS_DEMO;

export async function getSettings() {
    const { data, error } = await supabase
        .from("settings")
        .select("*")
        .single();

    if (error) {
        console.error(error);
        throw new Error("Settings could not be loaded");
    }
    return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
    if (isDemo) {
        // Show an error message in demo mode, even if the function runs successfully
        toast.error("Data mutations are deactivated in this demo app.");
        return; // Prevent any actual updates from happening
    }

    const { data, error } = await supabase
        .from("settings")
        .update(newSetting)
        // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
        .eq("id", 1)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Settings could not be updated");
    }
    return data;
}
