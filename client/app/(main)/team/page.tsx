import { Card, CardContent } from "@/components/ui/Card";

const teamGroups = [
  {
    title: "Leadership & Administration",
    members: [
      { name: "Mar Andrews Thazhath", role: "Chief Patron - Archbishop of Thrissur", image: "https://shanthibhavan.in/images/team/5ac754958c056.jpeg" },
      { name: "Fr. Joy Koothur", role: "CEO & Co-Founder", image: "https://shanthibhavan.in/images/team/5ac764c7d310a.jpeg" },
      { name: "Sr. Beatrice Scalinci", role: "Co-Founder", image: "https://shanthibhavan.in/images/team/team3.jpg" },
      { name: "Sr. Maria Chiara", role: "Co-Founder", image: "https://shanthibhavan.in/images/team/team4.jpg" },
    ]
  },
  {
    title: "Medical Team",
    members: [
      { name: "Dr. Medical Director", role: "Chief Medical Officer", image: "https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg" },
      { name: "Dr. Palliative Specialist", role: "Palliative Care Expert", image: "https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg" },
      { name: "Dr. General Physician", role: "General Medicine", image: "https://shanthibhavan.in/images/album/photos/66e3dd093ea3e.jpeg" },
      { name: "Dr. Dialysis Specialist", role: "Nephrology Consultant", image: "https://shanthibhavan.in/images/products/5b46fb5737c29.jpeg" },
    ]
  },
  {
    title: "Nursing Staff",
    members: [
      { name: "Head Nurse", role: "Nursing Director", image: "https://shanthibhavan.in/images/album/photos/66e3dd08de31e.jpeg" },
      { name: "Senior Staff Nurse", role: "In-Patient Care", image: "https://shanthibhavan.in/images/album/photos/66e3dd0877dd6.jpeg" },
      { name: "Staff Nurse", role: "In-Patient Care", image: "https://shanthibhavan.in/images/album/photos/66e3dc4eaeba5.jpeg" },
      { name: "Home Care Nurse", role: "Community Care", image: "https://shanthibhavan.in/images/products/5b4700199a8e3.jpeg" },
      { name: "ICU Nurse", role: "Critical Care", image: "https://shanthibhavan.in/images/album/photos/66e3dc4e65a9b.jpeg" },
      { name: "Dialysis Nurse", role: "Dialysis Unit", image: "https://shanthibhavan.in/images/album/photos/66e3dc4def388.jpeg" },
    ]
  },
  {
    title: "Allied Healthcare",
    members: [
      { name: "Senior Physiotherapist", role: "Physical Therapy Lead", image: "https://shanthibhavan.in/images/album/photos/66e3db9bec446.jpeg" },
      { name: "Physiotherapist", role: "Rehabilitation Specialist", image: "https://shanthibhavan.in/images/album/photos/66e3db9b461eb.jpeg" },
      { name: "Lab Technician", role: "Laboratory Services", image: "https://shanthibhavan.in/images/products/5b9b9dcd01a34.jpeg" },
      { name: "Radiology Technician", role: "Imaging Services", image: "https://shanthibhavan.in/images/products/5b9b932a43a69.jpeg" },
    ]
  },
  {
    title: "Spiritual Care Team",
    members: [
      { name: "Chaplain", role: "Spiritual Counselor", image: "https://shanthibhavan.in/images/album/photos/66e3db9ae3080.jpeg" },
      { name: "Counselor", role: "Psychological Support", image: "https://shanthibhavan.in/images/album/photos/637c74188b6da.jpeg" },
    ]
  },
  {
    title: "Support Staff & Volunteers",
    members: [
      { name: "Volunteer Coordinator", role: "Volunteer Program Manager", image: "https://shanthibhavan.in/images/album/photos/637c72b3c756e.jpeg" },
      { name: "Ambulance Driver", role: "Emergency Transport", image: "https://shanthibhavan.in/images/products/5b4708488e94c.jpeg" },
      { name: "Kitchen Staff", role: "Patient Nutrition", image: "https://shanthibhavan.in/images/products/5b46f73f1b039.jpeg" },
      { name: "Support Volunteer", role: "Community Service", image: "https://shanthibhavan.in/images/album/photos/690862fae90fe.jpeg" },
    ]
  }
];

export default function TeamPage() {
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
        {teamGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-l-4 border-primary pl-4 text-primary">{group.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {group.members.map((member, i) => (
                 <Card key={i} className="overflow-hidden border-none shadow-md">
                   <div className="aspect-square bg-gray-200">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   </div>
                   <CardContent className="p-4 text-center">
                     <h3 className="font-bold text-lg">{member.name}</h3>
                     <p className="text-sm text-primary">{member.role}</p>
                   </CardContent>
                 </Card>
              ))}
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}
