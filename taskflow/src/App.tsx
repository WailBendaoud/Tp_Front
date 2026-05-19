import { Routes, Route, Navigate } from 'react-router-dom';
/* import Login from './features/auth/Login';
 */
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import ProjectDetail from './pages/ProjectDetail';
/*import LoginMUI from './features/auth/LoginMUI';*/
import LoginBs from './features/auth/LoginBs';
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginBs />} />
      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />
      <Route path="/projects/:id" element={
        <ProtectedRoute><ProjectDetail /></ProtectedRoute>
      } />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
