// Always render dynamically, for accurate time
export const dynamic = 'force-dynamic';

export default function Clock() {
  const renderAt = new Date().toISOString();

  return <p>Page rendered at {renderAt}</p>;
}