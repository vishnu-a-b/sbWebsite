import { Card, CardContent } from "@/components/ui/Card";
import { getPublicTeamMembers } from "@/app/actions/cms/team";
import { getImageUrl } from "@/lib/image-url";

// Opt out of caching
export const dynamic = 'force-dynamic';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  designation: string;
  bio: string;
  image: string;
  specialization?: string;
  experience?: number;
  priority: number;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
}

function groupMembersByRole(members: TeamMember[]): TeamGroup[] {
  const grouped: Record<string, TeamMember[]> = {};

  for (const member of members) {
    if (!grouped[member.role]) {
      grouped[member.role] = [];
    }
    grouped[member.role].push(member);
  }

  // Convert to array and sort members within each group by priority
  return Object.entries(grouped).map(([role, members]) => ({
    title: role,
    members: members.sort((a, b) => b.priority - a.priority),
  }));
}

export default async function TeamPage() {
  const members = await getPublicTeamMembers();
  const teamGroups = groupMembersByRole(members);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Care Team</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          Meet the dedicated professionals and volunteers who make Shanthibhavan a home of hope and healing.
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl space-y-12 md:space-y-16">
          {teamGroups.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No team members to display at this time.</p>
            </div>
          ) : (
            teamGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-l-4 border-primary pl-4 text-primary">
                  {group.title}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {group.members.map((member) => (
                    <Card key={member._id} className="overflow-hidden border-none shadow-md">
                      <div className="aspect-square bg-gray-200">
                        <img
                          src={getImageUrl(member.image)}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-sm text-primary">{member.designation}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
