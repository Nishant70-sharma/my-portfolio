import ProtectedRoute from "../components/ProtectedRoute";
import SharePortfolio from "./SharePortfolio";

export default function ProtectedSharePage() {
  return (
    <ProtectedRoute>
      <SharePortfolio />
    </ProtectedRoute>
  );
}