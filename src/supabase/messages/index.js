import { supabase } from "..";

export const postMessages = async (name, email, message) => {
  try {
    const { error } = await supabase.from("messages").insert({
      name,
      email,
      message,
    });

    if (error) {
      throw error; // Throw the error so it gets caught below
    }

    alert("Thanks, Your Message is sent!");
  } catch (err) {
    alert("Failed to send message: " + err.message);
  }
};
