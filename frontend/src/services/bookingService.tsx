const API_URL = "http://localhost:5000";

async function createBooking(formData: {
  name: string;
  numberOfPeople: number;
  email: string;
  date: string;
}) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const newBooking = await response.json();
    return newBooking;
  } catch (error) {
    throw error;
  }
}

export { createBooking };
