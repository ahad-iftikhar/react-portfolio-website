import { useState } from "react";
// import { Bounce, ToastContainer, toast } from "react-toastify";
import { Toaster, toast } from "sonner";
import useTheme from "../context/themeContext";

function Contact() {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Web3forms service
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully");
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Enter data to send");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    onSubmit(e);
  };
  return (
    <div>
      <Toaster richColors />
      <div
        className={`w-full h-[100vh] text-black flex items-center justify-center ${
          theme === "dark" ? "bg-[#091E05] text-white" : "border-b-2"
        }`}
      >
        <form
          onSubmit={handleFormSubmit}
          className="h-full w-[60%] flex flex-col justify-center pt-14"
        >
          <label htmlFor="name" className="text-2xl">
            Name
          </label>
          <input
            className="h-10 text-black text-xl border-gray-400 border-2 rounded-md mb-6 p-1"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            className="h-10 text-black text-xl border-gray-400 border-2 rounded-md mb-6 p-1"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message" className="text-2xl">
            Message
          </label>
          <textarea
            className="text-black text-xl border-gray-400 border-2 rounded-md mb-6 p-2"
            rows={4}
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#f63d6b] hover:bg-[#eb2959] cursor-pointer rounded-md text-center w-20 mx-auto text-2xl py-1"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
