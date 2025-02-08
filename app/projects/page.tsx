import { Calendar, FileText, Clock, DollarSign } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Planning & Management</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tools and resources to plan and track your trades projects from start to finish.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project Scope */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <FileText className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Project Scope</h2>
          <p className="text-gray-300 mb-4">
            Define your project requirements with our customizable templates.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Scope →
          </button>
        </div>

        {/* Budget Planning */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <DollarSign className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Budget Planning</h2>
          <p className="text-gray-300 mb-4">
            Estimate costs and track expenses with our budget calculator.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Plan Budget →
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Clock className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Timeline</h2>
          <p className="text-gray-300 mb-4">
            Create and manage project timelines with our planning tools.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Timeline →
          </button>
        </div>

        {/* Progress Tracking */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Calendar className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-300 mb-4">
            Monitor project milestones and completion status.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Track Progress →
          </button>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A2A42] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Document Storage</h3>
            <p className="text-gray-300 mb-4">
              Securely store and organize all project-related documents.
            </p>
            <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
              Manage Documents →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Calendar, FileText, Clock, DollarSign } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Planning & Management</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tools and resources to plan and track your trades projects from start to finish.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project Scope */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <FileText className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Project Scope</h2>
          <p className="text-gray-300 mb-4">
            Define your project requirements with our customizable templates.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Scope →
          </button>
        </div>

        {/* Budget Planning */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <DollarSign className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Budget Planning</h2>
          <p className="text-gray-300 mb-4">
            Estimate costs and track expenses with our budget calculator.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Plan Budget →
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Clock className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Timeline</h2>
          <p className="text-gray-300 mb-4">
            Create and manage project timelines with our planning tools.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Timeline →
          </button>
        </div>

        {/* Progress Tracking */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Calendar className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-300 mb-4">
            Monitor project milestones and completion status.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Track Progress →
          </button>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A2A42] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Document Storage</h3>
            <p className="text-gray-300 mb-4">
              Securely store and organize all project-related documents.
            </p>
            <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
              Manage Documents →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Calendar, FileText, Clock, DollarSign } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Planning & Management</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tools and resources to plan and track your trades projects from start to finish.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project Scope */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <FileText className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Project Scope</h2>
          <p className="text-gray-300 mb-4">
            Define your project requirements with our customizable templates.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Scope →
          </button>
        </div>

        {/* Budget Planning */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <DollarSign className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Budget Planning</h2>
          <p className="text-gray-300 mb-4">
            Estimate costs and track expenses with our budget calculator.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Plan Budget →
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Clock className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Timeline</h2>
          <p className="text-gray-300 mb-4">
            Create and manage project timelines with our planning tools.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Timeline →
          </button>
        </div>

        {/* Progress Tracking */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Calendar className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-300 mb-4">
            Monitor project milestones and completion status.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Track Progress →
          </button>
        </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A2A42] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Document Storage</h3>
            <p className="text-gray-300 mb-4">
              Securely store and organize all project-related documents.
            </p>
            <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
              Manage Documents →
            </button>
          </div>
        </div>
      </div>
    </div>
import { Calendar, FileText, Clock, DollarSign } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Planning & Management</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tools and resources to plan and track your trades projects from start to finish.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project Scope */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <FileText className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Project Scope</h2>
          <p className="text-gray-300 mb-4">
            Define your project requirements with our customizable templates.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Scope →
          </button>
        </div>

        {/* Budget Planning */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <DollarSign className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Budget Planning</h2>
          <p className="text-gray-300 mb-4">
            Estimate costs and track expenses with our budget calculator.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Plan Budget →
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Clock className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Timeline</h2>
          <p className="text-gray-300 mb-4">
            Create and manage project timelines with our planning tools.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Create Timeline →
          </button>
        </div>

        {/* Progress Tracking */}
        <div className="bg-[#1A2A42] rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center mb-4">
            <Calendar className="text-[#A2906C]" size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-300 mb-4">
            Monitor project milestones and completion status.
          </p>
          <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
            Track Progress →
          </button>
        </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A2A42] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Document Storage</h3>
            <p className="text-gray-300 mb-4">
              Securely store and organize all project-related documents.
            </p>
            <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
              Manage Documents →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A2A42] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Document Storage</h3>
            <p className="text-gray-300 mb-4">
              Securely store and organize all project-related documents.
            </p>
            <button className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold">
              Manage Documents →
            </button>
          </div>
        </div>
      </div>
    </div>
