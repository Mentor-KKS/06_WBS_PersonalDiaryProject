import { useState } from "react";

function EntryForm({ onSubmit, existingDates, initialData }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    date: initialData?.date || new Date().toISOString().split("T")[0],
    imageUrl: initialData?.imageUrl || "",
    content: initialData?.content || "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    } else if (
      existingDates.includes(formData.date) &&
      (!initialData || initialData.date !== formData.date)
    ) {
      newErrors.date = "An entry for this date already exists";
    }

    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = "Image URL is required";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="label">
          <span className="label-text font-semibold">Title *</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="input input-bordered w-full"
          placeholder="Enter your entry title..."
        />
        {errors.title && (
          <p className="text-error text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text font-semibold">Date *</span>
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
          className="input input-bordered w-full"
        />
        {errors.date && (
          <p className="text-error text-sm mt-1">{errors.date}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text font-semibold">Image URL *</span>
        </label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
          className="input input-bordered w-full"
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && (
          <p className="text-error text-sm mt-1">{errors.imageUrl}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text font-semibold">Content *</span>
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => handleChange("content", e.target.value)}
          className="textarea textarea-bordered w-full min-h-[120px]"
          placeholder="Write your thoughts, experiences, and reflections..."
        />
        {errors.content && (
          <p className="text-error text-sm mt-1">{errors.content}</p>
        )}
      </div>

      <div className="pt-4 mx-auto">
        <button type="submit" className="btn btn-success btn-circle w-1/2">
          {initialData ? "Update Entry" : "Save Entry"}
        </button>
      </div>
    </form>
  );
}

export default EntryForm;
