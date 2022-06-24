import Header from "../components/Header";
import Video from "../components/Video";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  //armazenar no localStorage a última aula assistida. Se não tiver nada em cache, carregar aula 1 (abertura)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <div className="flex-1" />
        }
        <Sidebar />
      </main>
    </div>
  )
}
