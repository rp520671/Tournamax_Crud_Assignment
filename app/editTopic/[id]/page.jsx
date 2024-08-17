import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  
  try {
    const res = await fetch(`${baseUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null; // Return null in case of an error
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const data = await getTopicById(id);

  if (!data || !data.topic) {
    return <div>Error: Topic not found or failed to fetch.</div>;
  }

  const { title, description } = data.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
