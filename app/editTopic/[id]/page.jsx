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
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const topicData = await getTopicById(id);

  if (!topicData) {
    // Handle the case where the topic could not be fetched
    return <p>Topic not found</p>;
  }

  const { title, description } = topicData.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
