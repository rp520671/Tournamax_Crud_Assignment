import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
    return { topic: null }; // Return a default value to handle errors gracefully
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const data = await getTopicById(id);

  if (!data.topic) {
    return <div>Topic not found or failed to load.</div>; // Provide user feedback
  }

  const { title, description } = data.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
