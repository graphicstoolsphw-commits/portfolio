import React, { useState } from 'react';
import { X, ArrowRight, Upload, Calendar, Check, Clock, FileText } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  initialType?: 'project' | 'meeting' | 'brief' | 'product-image';
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  initialType = 'project',
  onClose,
}) => {
  const [activeType, setActiveType] = useState<'project' | 'meeting' | 'brief' | 'product-image'>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    service: 'Ecommerce Product Visuals',
    website: '',
    message: '',
    meetingDate: '2026-09-15',
    meetingTime: '14:00 GMT',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div
      id="inquiry-modal-overlay"
      className="fixed inset-0 z-50 bg-[#20211E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="inquiry-modal-container"
        className="bg-[#F5F2EC] text-[#20211E] max-w-2xl w-full border border-[#20211E]/20 shadow-2xl p-6 sm:p-10 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-inquiry-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 bg-[#202A21] text-[#F5F2EC] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5C5E58]">Inquiry Received</p>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#20211E]">
              Thank you, {formData.name || 'there'}.
            </h3>
            <p className="text-sm text-[#5C5E58] max-w-md mx-auto leading-relaxed">
              Muhammad Abubakar has received your details and will review your project requirements. You will receive a direct reply within 24 business hours.
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-[#20211E] text-[#F5F2EC] text-xs uppercase tracking-[0.15em] hover:bg-[#202A21] transition-colors cursor-pointer"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Tabs */}
            <div className="flex border-b border-[#20211E]/15 mb-8 pb-3 gap-6 overflow-x-auto text-xs uppercase tracking-[0.15em]">
              <button
                onClick={() => setActiveType('project')}
                className={`pb-3 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeType === 'project'
                    ? 'text-[#20211E] border-b-2 border-[#20211E]'
                    : 'text-[#5C5E58] hover:text-[#20211E]'
                }`}
              >
                Start a Project
              </button>
              <button
                onClick={() => setActiveType('meeting')}
                className={`pb-3 font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeType === 'meeting'
                    ? 'text-[#20211E] border-b-2 border-[#20211E]'
                    : 'text-[#5C5E58] hover:text-[#20211E]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Meeting
              </button>
              <button
                onClick={() => setActiveType('brief')}
                className={`pb-3 font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeType === 'brief'
                    ? 'text-[#20211E] border-b-2 border-[#20211E]'
                    : 'text-[#5C5E58] hover:text-[#20211E]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Send a Brief
              </button>
              <button
                onClick={() => setActiveType('product-image')}
                className={`pb-3 font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeType === 'product-image'
                    ? 'text-[#20211E] border-b-2 border-[#20211E]'
                    : 'text-[#5C5E58] hover:text-[#20211E]'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Send Product Image
              </button>
            </div>

            {/* Header info */}
            <div className="mb-6">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">
                {activeType === 'meeting'
                  ? 'Schedule a 30-min Creative Consultation'
                  : activeType === 'product-image'
                  ? 'Send a Product Image for Visual Transformation'
                  : activeType === 'brief'
                  ? 'Submit Your Project Brief & Scope'
                  : 'Start a Project with Muhammad Abubakar'}
              </h3>
              <p className="text-xs text-[#5C5E58] mt-1">
                {activeType === 'meeting'
                  ? 'Discuss upcoming product launches, rebranding, or visual production pipelines.'
                  : 'Direct review by Muhammad Abubakar. Confidential and prompt.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@brand.com"
                    className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Solace Atelier"
                    className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                    Website or Product Link
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourbrand.com"
                    className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                  />
                </div>
              </div>

              {activeType === 'meeting' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.meetingDate}
                      onChange={(e) => setFormData({ ...formData, meetingDate: e.target.value })}
                      className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                      Time Slot (GMT / UTC)
                    </label>
                    <select
                      value={formData.meetingTime}
                      onChange={(e) => setFormData({ ...formData, meetingTime: e.target.value })}
                      className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E]"
                    >
                      <option value="10:00 GMT">10:00 AM GMT (Morning)</option>
                      <option value="14:00 GMT">02:00 PM GMT (Afternoon)</option>
                      <option value="16:30 GMT">04:30 PM GMT (Late Afternoon)</option>
                      <option value="19:00 GMT">07:00 PM GMT (Evening)</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E]"
                  >
                    <option value="Ecommerce Product Visuals">Ecommerce Product Visuals (Lifestyle & Retouching)</option>
                    <option value="Marketplace & Amazon">Marketplace & Amazon (A+ Content & Listings)</option>
                    <option value="Branding & Packaging">Branding & Packaging (Identities, Labels, Boxes)</option>
                    <option value="Social & Campaign Content">Social & Campaign Content (Editorial, Carousels)</option>
                    <option value="AI Visuals & Motion">AI Visuals & Motion (Product Reels, 3D Film)</option>
                    <option value="Catalogues & Print">Catalogues & Print (Trade Lookbooks, POS Material)</option>
                  </select>
                </div>
              )}

              {/* Drag and Drop File Upload Area */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                  {activeType === 'product-image' ? 'Upload Raw Product Image *' : 'Attach Brief or Reference Image (Optional)'}
                </label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleFileDrop}
                  className={`border-2 border-dashed p-4 text-center cursor-pointer transition-colors ${
                    isDragging ? 'border-[#20211E] bg-[#EEEAE2]' : 'border-[#20211E]/20 bg-[#EEEAE2]/50 hover:bg-[#EEEAE2]'
                  }`}
                  onClick={() => document.getElementById('inquiry-file-input')?.click()}
                >
                  <input
                    type="file"
                    id="inquiry-file-input"
                    className="hidden"
                    onChange={handleFileSelect}
                    accept="image/*,.pdf,.zip"
                  />
                  {uploadedFile ? (
                    <div className="flex items-center justify-center gap-2 text-xs text-[#20211E] font-medium">
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span>{uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1">
                      <Upload className="w-5 h-5 text-[#5C5E58]" />
                      <p className="text-xs text-[#20211E]">
                        Drag and drop your file here, or <span className="underline">browse</span>
                      </p>
                      <p className="text-[10px] text-[#5C5E58]">PNG, JPG, PDF up to 25MB</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1">
                  Message or Project Scope *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Muhammad about your product, timeline, and current visual challenges..."
                  className="w-full bg-[#EEEAE2] border border-[#20211E]/15 px-3.5 py-2.5 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] text-[#5C5E58] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Replies within 24 hours
                </span>
                <button
                  type="submit"
                  id="submit-inquiry-btn"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium px-6 py-3 bg-[#20211E] text-[#F5F2EC] hover:bg-[#202A21] transition-colors cursor-pointer"
                >
                  <span>{activeType === 'meeting' ? 'Confirm Meeting Request' : 'Send Inquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
