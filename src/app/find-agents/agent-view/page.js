'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient'; // Adjusted path

const AgentViewPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const agentId = searchParams.get('id');
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgent = async () => {
      if (!agentId) {
        setError('Agent ID is missing.');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('agents') // Assuming you have an 'agents' table
          .select('*')
          .eq('id', agentId)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setAgent(data);
        } else {
          setError('Agent not found.');
        }
      } catch (err) {
        console.error('Error fetching agent:', err.message);
        setError('Failed to load agent details.');
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [agentId]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading agent details...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
  }

  if (!agent) {
    return <div className="flex justify-center items-center min-h-screen">No agent data available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Agent Profile: {agent.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Email:</span> {agent.email}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Phone:</span> {agent.phone}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">License:</span> {agent.license_number}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Experience:</span> {agent.experience_years} years</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Specialties:</span> {agent.specialties}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">About {agent.name}</h2>
            <p className="text-gray-700 leading-relaxed">{agent.bio || 'No biography available.'}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Agent</h2>
          <button
            onClick={() => alert(`Contacting ${agent.name} at ${agent.email}`)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
        <button
          onClick={() => router.back()}
          className="mt-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back to Agents
        </button>
      </div>
    </div>
  );
};

export default AgentViewPage;