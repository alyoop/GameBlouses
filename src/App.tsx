import React, { useState, useEffect, useCallback } from 'react';
import { TrendingUp, Trophy, Minus, ChevronDown } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showFixtures, setShowFixtures] = useState(true);
  const [visibleItems, setVisibleItems] = useState(5);

  // Check for touch device on mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 40;
    const y = (clientY / window.innerHeight - 0.5) * 40;
    
    requestAnimationFrame(() => {
      setMousePosition({ x, y });
    });
  }, []);

  useEffect(() => {
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isTouchDevice]);

  const playerStats = [
    { name: 'James Audley', points: 48, assists: 4, fouls: 4 },
    { name: 'James Audley', points: 48, assists: 4, fouls: 4 },
    { name: 'James Audley', points: 48, assists: 4, fouls: 4 },
  ];

  const upcomingFixtures = [
    { teams: 'Game Blouses vs Rockets', date: '2024-03-15', time: '19:30', venue: 'MSAC COURT 3' },
    { teams: 'Game Blouses vs Heat', date: '2024-03-22', time: '20:00', venue: 'MSAC COURT 1' },
    { teams: 'Game Blouses vs Warriors', date: '2024-03-29', time: '20:30', venue: 'MSAC COURT 2' },
    { teams: 'Game Blouses vs Lakers', date: '2024-04-05', time: '19:00', venue: 'MSAC COURT 1' },
    { teams: 'Game Blouses vs Nets', date: '2024-04-12', time: '21:00', venue: 'MSAC COURT 3' },
    { teams: 'Game Blouses vs Celtics', date: '2024-04-19', time: '20:00', venue: 'MSAC COURT 2' },
    { teams: 'Game Blouses vs Bulls', date: '2024-04-26', time: '19:30', venue: 'MSAC COURT 1' },
    { teams: 'Game Blouses vs Spurs', date: '2024-05-03', time: '20:30', venue: 'MSAC COURT 3' },
  ];

  const pastResults = [
    { teams: 'Game Blouses vs Wolfpack', score: '67 - 36', result: 'Win', date: '2024-03-01' },
    { teams: 'Game Blouses vs Lakers', score: '82 - 75', result: 'Win', date: '2024-02-23' },
    { teams: 'Game Blouses vs Warriors', score: '78 - 82', result: 'Loss', date: '2024-02-16' },
    { teams: 'Game Blouses vs Nets', score: '95 - 85', result: 'Win', date: '2024-02-09' },
    { teams: 'Game Blouses vs Heat', score: '88 - 76', result: 'Win', date: '2024-02-02' },
    { teams: 'Game Blouses vs Rockets', score: '92 - 88', result: 'Win', date: '2024-01-26' },
    { teams: 'Game Blouses vs Celtics', score: '75 - 80', result: 'Loss', date: '2024-01-19' },
    { teams: 'Game Blouses vs Bulls', score: '85 - 72', result: 'Win', date: '2024-01-12' },
  ];

  const matchData = [
    { match: 'vs Rockets', pointsFor: 85, pointsAgainst: 72 },
    { match: 'vs Heat', pointsFor: 92, pointsAgainst: 88 },
    { match: 'vs Warriors', pointsFor: 78, pointsAgainst: 82 },
    { match: 'vs Nets', pointsFor: 95, pointsAgainst: 85 },
    { match: 'vs Lakers', pointsFor: 88, pointsAgainst: 76 },
  ];

  const roster = [
    {
      number: 8,
      name: 'James Audley',
      position: 'Shooter',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 23,
      name: 'Marcus Thompson',
      position: 'Point Guard',
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 15,
      name: 'Chris Jordan',
      position: 'Power Forward',
      image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 34,
      name: 'David Chen',
      position: 'Center',
      image: 'https://images.unsplash.com/photo-1505247964246-1f0a90443c36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 11,
      name: 'Michael Brooks',
      position: 'Small Forward',
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 5,
      name: 'Andre Wilson',
      position: 'Shooting Guard',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 45,
      name: 'Robert Taylor',
      position: 'Power Forward',
      image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      number: 21,
      name: 'Kevin Martinez',
      position: 'Point Guard',
      image: 'https://images.unsplash.com/photo-1505247964246-1f0a90443c36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
  ];

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 5);
  };

  const currentItems = showFixtures 
    ? upcomingFixtures.slice(0, visibleItems)
    : pastResults.slice(0, visibleItems);

  const hasMoreItems = showFixtures 
    ? visibleItems < upcomingFixtures.length
    : visibleItems < pastResults.length;

  // Reset visible items when switching between fixtures and results
  useEffect(() => {
    setVisibleItems(5);
  }, [showFixtures]);

  const getTransform = (factor = 1) => ({
    transform: !isTouchDevice 
      ? `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`
      : 'none',
    transition: 'transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
  });

  return (
    <div className="min-h-screen bg-[#100223] text-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/Header.jpg')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#100223]/50 via-[#100223]/80 to-[#100223]"></div>
        <div className="relative z-10 flex items-center justify-center w-full overflow-hidden">
          <div className="flex items-center justify-center relative">
            {/* GAME text */}
            <span 
              className="text-[160px] font-extrabold tracking-[0.02em] leading-none mr-[-20px]"
              style={{
                background: 'linear-gradient(93deg, #F8EDFA -7.98%, #EDB5F7 168.1%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#F2A5FE',
                ...getTransform(0.5)
              }}
            >
              GAME
            </span>
            
            {/* Jersey image */}
            <img 
              src="/Jersey-1.png" 
              alt="Team Jersey" 
              className="w-[400px] relative z-20 mx-[-60px]"
              style={getTransform(0.8)}
            />
            
            {/* BLOUSES text */}
            <span 
              className="text-[160px] font-extrabold tracking-[0.02em] leading-none ml-[-20px]"
              style={{
                background: 'linear-gradient(93deg, #F8EDFA -7.98%, #EDB5F7 168.1%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#F2A5FE',
                ...getTransform(0.5)
              }}
            >
              BLOUSES
            </span>
          </div>
        </div>
      </div>

      {/* Score Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Scoreboard Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] p-6">
            <div className="flex flex-col h-full">
              {/* Top Section with Scores */}
              <div className="flex justify-between items-center mb-auto">
                <div className="text-center flex-1">
                  <div className="text-[72px] leading-[90px] font-bold text-white text-center">48</div>
                  <div className="text-white text-center font-outfit text-[20px] font-normal tracking-[1.6px] uppercase mt-2">Game Blouses</div>
                </div>
                <div className="text-center px-8">
                  <div className="text-white font-outfit text-[16px] font-light tracking-[1.28px] uppercase">FINAL</div>
                  <div className="text-white font-outfit text-[16px] font-light tracking-[1.28px] uppercase">MSAC COURT 3</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-[72px] leading-[90px] font-bold text-white text-center">40</div>
                  <div className="text-white text-center font-outfit text-[20px] font-normal tracking-[1.6px] uppercase mt-2">Wolfpack</div>
                </div>
              </div>

              {/* Bottom Section with Point Leaders */}
              <div className="mt-auto pt-20">
                <div className="text-center text-white font-outfit text-[16px] font-light tracking-[1.6px] uppercase mb-4">Point Leaders</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-16">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-white font-outfit text-[20px] font-light tracking-[0.4px]">James Audley</span>
                    </div>
                    <span className="text-white font-outfit text-[24px] font-medium tracking-[0.96px] uppercase">22 PTS</span>
                  </div>
                  <div className="flex items-center justify-center gap-16">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-white font-outfit text-[20px] font-light tracking-[0.4px]">James Audley</span>
                    </div>
                    <span className="text-white font-outfit text-[24px] font-medium tracking-[0.96px] uppercase">22 PTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content */}
        <div className="max-w-6xl mx-auto">
          {/* Team Stats */}
          <div className="text-white text-center font-outfit text-[16px] font-light tracking-[1.6px] uppercase mb-6">
            Team Stats
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="LADDER POSITION"
              value="4TH"
              change="+1 from last week"
              icon={<Trophy className="w-5 h-5 text-purple-500" />}
            />
            <StatCard
              title="WINS"
              value="6"
              change="+1 from last week"
              icon={<TrendingUp className="w-5 h-5 text-green-500" />}
            />
            <StatCard
              title="LOSSES"
              value="4"
              change="Same as last week"
              icon={<Minus className="w-5 h-5 text-red-500" />}
            />
            <StatCard
              title="POINT DIFFERENCE"
              value="+100"
              change="+35 from last week"
              icon={<TrendingUp className="w-5 h-5 text-green-500" />}
            />
          </div>

          {/* Player Stats and Team Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Player Stats */}
            <div className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] p-6">
              <h2 className="text-[rgba(229,231,235,0.80)] font-outfit text-[16px] font-normal leading-[100%] tracking-[1.28px] uppercase mb-4">Player Stats</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="text-left pb-4">PLAYER</th>
                      <th className="text-right pb-4">POINTS</th>
                      <th className="text-right pb-4">ASSISTS</th>
                      <th className="text-right pb-4">FOULS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerStats.map((player, i) => (
                      <tr key={i} className="border-t border-purple-900/30">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            {player.name}
                          </div>
                        </td>
                        <td className="text-right">{player.points}</td>
                        <td className="text-right">{player.assists}</td>
                        <td className="text-right">{player.fouls}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Team Performance */}
            <div className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] p-6">
              <h2 className="text-[rgba(229,231,235,0.80)] font-outfit text-[16px] font-normal leading-[100%] tracking-[1.28px] uppercase mb-6">Team Performance</h2>
              <div className="space-y-8">
                {matchData.map((match, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">{match.match}</span>
                      <span className="font-semibold">{match.pointsFor} - {match.pointsAgainst}</span>
                    </div>
                    <div className="h-4 bg-purple-900/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500 rounded-l-full"
                        style={{ 
                          width: `${(match.pointsFor / (match.pointsFor + match.pointsAgainst)) * 100}%`,
                          display: 'inline-block'
                        }}
                      ></div>
                      <div 
                        className="h-full bg-red-500 rounded-r-full"
                        style={{ 
                          width: `${(match.pointsAgainst / (match.pointsFor + match.pointsAgainst)) * 100}%`,
                          display: 'inline-block'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-400">Points For</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm text-gray-400">Points Against</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixtures */}
          <div className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[rgba(229,231,235,0.80)] font-outfit text-[16px] font-normal leading-[100%] tracking-[1.28px] uppercase">Fixtures and Results</h2>
              <div className="flex rounded-full bg-[rgba(58,23,106,0.54)] p-1">
                <button
                  className={`px-6 py-2 rounded-full text-[16px] font-[600] transition-all duration-300 ${
                    showFixtures
                      ? 'bg-purple-500 text-white'
                      : 'text-white/60'
                  }`}
                  onClick={() => setShowFixtures(true)}
                >
                  Fixtures
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-[16px] font-[600] transition-all duration-300 ${
                    !showFixtures
                      ? 'bg-purple-500 text-white'
                      : 'text-white/60'
                  }`}
                  onClick={() => setShowFixtures(false)}
                >
                  Results
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {currentItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] p-4 flex justify-between items-center"
                >
                  <div>
                    <div className="text-white font-outfit text-[20px] font-[300] tracking-[0.48px]">
                      {showFixtures ? item.teams : item.teams}
                    </div>
                    <div className="text-[20px] text-gray-400">
                      {showFixtures ? item.venue : item.date}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[20px] font-medium">
                      {showFixtures ? item.date : item.score}
                    </div>
                    <div className={`text-[20px] ${showFixtures ? 'text-gray-400' : (item.result === 'Loss' ? 'text-red-500' : 'text-green-500')}`}>
                      {showFixtures ? item.time : item.result}
                    </div>
                  </div>
                </div>
              ))}
              
              {hasMoreItems && (
                <button
                  onClick={handleLoadMore}
                  className="w-full mt-4 py-3 rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <span>Load More</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Team Roster */}
          <div>
            <h2 className="text-center text-white font-outfit text-[16px] font-light tracking-[1.6px] uppercase mb-12">
              Team Roster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roster.map((player) => (
                <div 
                  key={player.number}
                  className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] overflow-hidden"
                >
                  <div className="relative h-[400px]">
                    <div className="absolute inset-0">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100223] via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-purple-500 font-outfit text-[32px] font-bold mb-2">
                        #{player.number}
                      </div>
                      <h3 className="text-white font-outfit text-[24px] font-semibold mb-1">
                        {player.name}
                      </h3>
                      <p className="text-gray-400 font-outfit text-[16px]">
                        {player.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon }) {
  return (
    <div className="rounded-[20px] border border-[rgba(58,23,106,0.54)] bg-gradient-to-r from-[rgba(14,234,221,0.05)] via-[rgba(255,255,255,0.05)] to-[rgba(173,250,29,0.05)] shadow-[0px_-8px_56px_-8px_rgba(218,88,239,0.10)] py-8 px-6">
      <div className="flex justify-between items-start mb-4">
        <div className="text-[rgba(229,231,235,0.80)] font-outfit text-[16px] font-normal leading-[100%] tracking-[1.28px] uppercase">{title}</div>
        {icon}
      </div>
      <div className="text-white font-outfit text-[56px] font-bold leading-[100%] uppercase mb-2">{value}</div>
      <div className="text-[#E5E7EB] font-outfit text-[16px] font-normal leading-[100%] tracking-[0.32px]">{change}</div>
    </div>
  );
}

export default App;