import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // Fallback to local URL for local testing
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Error fetching topic: ${res.statusText}`);
      throw new Error(`Failed to fetch topic: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
    return { topic: null }; // Handle errors gracefully
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
