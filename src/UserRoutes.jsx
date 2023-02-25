
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Welcome = lazy(() => import("./components/Welcome/Welcome"));
const QuestionA = lazy(() => import("./components/QuestionA/QuestionA"));
const QuestionB = lazy(() => import("./components/QuestionB/QuestionB"));
const QuestionC = lazy(() => import("./components/QuestionC/QuestionC"));
// const QuestionD = lazy(() => import("./components/QuestionD/QuestionD"));
const Finish = lazy(() => import("./components/Finish/Finish"));



const UserRoutes = () => {
  return (
      <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/question-a" element={<QuestionA />} />
        <Route path="/question-b" element={<QuestionB />} />
        <Route path="/question-c" element={<QuestionC />} />
        {/* <Route path="/question-d" element={<QuestionD />} /> */}
        <Route path="/finish" element={<Finish />}/>
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;