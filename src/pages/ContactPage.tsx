import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Send, CheckCircle, Clock, Building2 } from 'lucide-react';
import { JOURNAL_DATA } from '../data/journal';

interface Props {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<Props> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="border-b border-[#E8DED3] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">Contact</span>
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          EDITORIAL LIAISON
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Contact the Journal Office
        </h1>
        <p className="text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          Direct inquiries regarding manuscript status, editorial scope, peer review empanelment, and institutional cooperation to the editorial secretariat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Official Particulars (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-[#E8DED3] p-6 sm:p-7 rounded-xs space-y-5 shadow-xs">
            <div className="border-b border-[#E8DED3] pb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7F3040] block">
                EDITORIAL HEADQUARTERS
              </span>
              <h2 className="text-xl font-bold font-academic text-[#292929] mt-0.5">
                Editorial Office of Shivraj 350
              </h2>
              <p className="text-xs text-[#575551]">Shivaji College, University of Delhi</p>
            </div>

            <div className="space-y-4 text-xs text-[#575551]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7F3040] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">Postal Address:</span>
                  <p className="text-[#292929] leading-relaxed">
                    Shivraj 350 Editorial Office <br />
                    Shivaji College, University of Delhi <br />
                    Ring Road, Raja Garden <br />
                    New Delhi – 110027, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#F8F5EE]">
                <Mail className="w-4 h-4 text-[#7F3040] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">Official Editorial Email:</span>
                  <a
                    href={`mailto:${JOURNAL_DATA.email}`}
                    className="text-[#7F3040] font-medium hover:underline text-sm block mt-0.5"
                  >
                    {JOURNAL_DATA.email}
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    For all submissions, review applications, and editorial correspondence.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#F8F5EE]">
                <ExternalLink className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">College Official Portal:</span>
                  <a
                    href={JOURNAL_DATA.collegeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7F3040] font-medium hover:underline block mt-0.5"
                  >
                    www.shivajicollege.ac.in
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DED3] bg-[#F8F5EE] p-3 rounded-xs text-[11px] text-[#575551] leading-relaxed">
              <strong>Notice:</strong> As an institutional academic publication, phone inquiries are directed through college administration. Please utilize the dedicated email address above for documented scholarly records.
            </div>
          </div>

          {/* Institutional Hours Note */}
          <div className="bg-[#E8DED3]/40 border border-[#E8DED3] p-5 rounded-xs space-y-2 text-xs text-[#575551]">
            <span className="font-bold text-[#7F3040] uppercase tracking-wider text-[11px] block">
              Editorial Response Timeline
            </span>
            <p className="font-editorial-body leading-relaxed">
              Inquiries submitted to the editorial desk typically receive a formal response within 2 to 3 university working days during the active academic term.
            </p>
          </div>

        </div>

        {/* Right Column: Interactive Editorial Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#E8DED3] p-6 sm:p-8 rounded-xs shadow-xs">
          
          <div className="border-b border-[#E8DED3] pb-4 mb-6">
            <h2 className="text-xl font-bold font-academic text-[#292929]">
              Send an Editorial Inquiry
            </h2>
            <p className="text-xs text-[#575551] font-editorial-body mt-1">
              Please complete this inquiry dispatch. Your communication will be routed to the appropriate section editor or managing editor.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-[#F8F5EE] border border-emerald-300 rounded-xs space-y-3">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold font-academic text-[#292929]">
                Inquiry Successfully Logged
              </h3>
              <p className="text-xs sm:text-sm text-[#575551] font-editorial-body max-w-md mx-auto leading-relaxed">
                Thank you for contacting <em>Shivraj 350</em>. A confirmation has been registered for <strong>{formData.email}</strong>, and our editorial secretariat will review your message promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', affiliation: '', subject: 'General Inquiry', message: '' });
                }}
                className="mt-4 px-4 py-2 bg-[#7F3040] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#642331]"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Prof. / Dr. / Scholar Name"
                    className="w-full px-3 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] rounded-xs text-[#292929] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="institutional.email@university.edu"
                    className="w-full px-3 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] rounded-xs text-[#292929] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Institutional Affiliation
                  </label>
                  <input
                    type="text"
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    placeholder="Department & University / College"
                    className="w-full px-3 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] rounded-xs text-[#292929] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Inquiry Category *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] rounded-xs text-[#292929] outline-none"
                  >
                    <option value="General Inquiry">General Editorial Inquiry</option>
                    <option value="Manuscript Status">Manuscript Submission Query</option>
                    <option value="Call for Papers">Call for Papers (CFP)</option>
                    <option value="Peer Reviewer Application">Peer Reviewer Empanelment</option>
                    <option value="Copyright & Archiving">Copyright / Open Access</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">
                  Message / Detailed Inquiry *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state the specific details of your inquiry, referencing your manuscript identifier if applicable..."
                  className="w-full px-3 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] rounded-xs text-[#292929] outline-none resize-y"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  * Required fields for editorial logging
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
