"use client";

import { useState } from "react";
import Button from "@/components/button";
import { toast } from "react-hot-toast";

const Home = () => {
  const [base64, setBase64] = useState("");

  const handleExport = () => {
    try {
      const json = JSON.stringify({ key: "value" }); // Replace with actual data
      const base64String = btoa(json);
      setBase64(base64String);
      toast.success("Exported to Base64!");
    } catch {
      toast.error("Failed to export.");
    }
  };

  const handleImport = () => {
    try {
      const decodedJson = atob(base64);
      const data = JSON.parse(decodedJson);
      console.log("Imported JSON:", data);
      toast.success("Imported from Base64!");
    } catch {
      toast.error("Invalid Base64 string.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 md:gap-3 justify-between items-start mb-3 md:mb-4">
        <h1 className="text-lg md:text-2xl font-semibold">
          Import / Export (Only UI sample - None functional){" "}
        </h1>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Base64 String</label>
        <textarea
          className="w-full bg-gray-700 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
          rows={5}
          value={base64}
          onChange={(e) => setBase64(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={handleExport}>Export</Button>
        <Button onClick={handleImport}>Import</Button>
      </div>
    </div>
  );
};

export default Home;
