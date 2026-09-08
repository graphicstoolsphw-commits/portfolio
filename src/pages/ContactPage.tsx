import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Clock, Upload, Check, Calendar, FileText, ArrowUpRight } from 'lucide-react';

interface ContactPageProps {
  onOpenInquiryModal: (type?: 'meeting' | 'brief' | 'product-image') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenInquiryModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    serviceNeed: 'Ecommerce Product Imagery',
    website: '',
    message: '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <div id="contact-page-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#6E755E]">
            CONTACT
          </p>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.04]">
            Let’s create <br />
            <span className="italic font-light">something meaningful.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5C5E58] leading-relaxed pt-1">
            Available for creative direction, branding and packaging, product and AI lifestyle imagery, ecommerce content and selected creative collaborations.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Secondary Actions */}
          <div className="lg:col-span-5 space-y-10">
            {/* Direct Contact Details */}
            <div className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
                Direct Contact
              </p>

              <div className="space-y-4 text-sm text-[#5C5E58]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#6E755E] mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] block text-[#20211E] font-medium">
                      Studio Email
                    </span>
                    <a
                      href="mailto:abubakar.visuals@gmail.com"
                      className="text-[#20211E] hover:underline"
                    >
                      abubakar.visuals@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#6E755E] mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] block text-[#20211E] font-medium">
                      Response Time
                    </span>
                    <p>Replies within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#6E755E] mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] block text-[#20211E] font-medium">
                      Availability
                    </span>
                    <p>Available worldwide · Remote & Studio Engagements</p>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-[#20211E]/10 flex items-center gap-6 text-xs">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#20211E] hover:text-[#6E755E] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#20211E] hover:text-[#6E755E] transition-colors"
                >
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Secondary Options Strip */}
            <div className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
                Alternative Options
              </p>
              <div className="space-y-3">
                <button
                  id="contact-book-meeting-btn"
                  onClick={() => onOpenInquiryModal('meeting')}
                  className="w-full flex items-center justify-between p-4 bg-[#F5F2EC] border border-[#20211E]/10 hover:border-[#20211E]/30 text-xs uppercase tracking-[0.15em] text-[#20211E] transition-colors cursor-pointer group"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6E755E]" />
                    <span>Book a Meeting (30 Min)</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="contact-send-brief-btn"
                  onClick={() => onOpenInquiryModal('brief')}
                  className="w-full flex items-center justify-between p-4 bg-[#F5F2EC] border border-[#20211E]/10 hover:border-[#20211E]/30 text-xs uppercase tracking-[0.15em] text-[#20211E] transition-colors cursor-pointer group"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#6E755E]" />
                    <span>Send a Structured Brief</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 bg-[#EEEAE2] p-8 sm:p-10 border border-[#20211E]/10">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 bg-[#202A21] text-[#F5F2EC] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6E755E]">Message Dispatched</p>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#20211E]">
                  Thank you, {formData.name || 'there'}.
                </h3>
                <p className="text-sm text-[#5C5E58] max-w-md mx-auto leading-relaxed">
                  Your enquiry has been delivered directly to Muhammad Abubakar. You will receive a personal reply with next steps within 24 hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        brand: '',
                        serviceNeed: 'Ecommerce Product Imagery',
                        website: '',
                        message: '',
                      });
                      setUploadedFile(null);
                    }}
                    className="px-6 py-3 bg-[#20211E] text-[#F5F2EC] text-xs uppercase tracking-[0.15em] hover:bg-[#202A21] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#20211E]/10 pb-4 mb-2">
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">
                    Direct Project Enquiry
                  </h2>
                  <p className="text-xs text-[#5C5E58] mt-1">
                    Provide initial details about your product, timeline, and deliverables.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Thomas Keller"
                      className="w-full bg-[#F5F2EC] border border-[#20211E]/15 px-3.5 py-3 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="thomas@brand.com"
                      className="w-full bg-[#F5F2EC] border border-[#20211E]/15 px-3.5 py-3 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                      Brand / Company
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="e.g. Haven Goods"
                      className="w-full bg-[#F5F2EC] border border-[#20211E]/15 px-3.5 py-3 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                      Website / Product Link (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-[#F5F2EC] border border-[#20211E]/15 px-3.5 py-3 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                    What do you need?
                  </label>
                  <select
                    value={formData.serviceNeed}
                    onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                    className="w-full bg-[#F5F2EC] border border-[#20211E]/15 px-3.5 py-3 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                  >
                    <option value="Ecommerce Product Imagery">Ecommerce Product Visuals & Lifestyle Staging</option>
                    <option value="Marketplace & Amazon A+">Marketplace Listings & Amazon A+ Content</option>
                    <option value="Branding & Packaging">Brand Identity, Packaging Dielines & Labels</option>
                    <option value="Social & Campaign Content">Campaign Visuals & Social Editorial Carousels</option>
                    <option value="AI Visuals & Motion">AI Product Reels & 3D Motion Graphics</option>
                    <option value="Catalogues & Print">Annual Catalogues, Lookbooks & Print Production</option>
                    <option value="Full Creative Direction">Comprehensive Creative Direction / Ongoing Retainer</option>
                  </select>
                </div>

                {/* File Upload supporting Drag & Drop + Click */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                    Attach Product Image or Brief (Optional)
                  </label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                    className={`border-2 border-dashed p-4 text-center cursor-pointer transition-colors ${
                      isDragging ? 'border-[#20211E] bg-[#F5F2EC]' : 'border-[#20211E]/20 bg-[#F5F2EC]/60 hover:bg-[#F5F2EC]'
                    }`}
                    onClick={() => document.getElementById('contact-file-input')?.click()}
                  >
                    <input
                      type="file"
                      id="contact-file-input"
                      className="hidden"
                      onChange={handleFileSelect}
                      accept="image/*,.pdf,.zip"
                    />
                    {uploadedFile ? (
                      <div className="flex items-center justify-center gap-2 text-xs text-[#20211E] font-medium">
                        <Check className="w-4 h-4 text-[#6E755E]" />
                        <span>{uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1">
                        <Upload className="w-5 h-5 text-[#5C5E58]" />
                        <p className="text-xs text-[#20211E]">
                          Drag and drop reference files, or <span className="underline">browse</span>
                        </p>
                        <p className="text-[10px] text-[#5C5E58]">PNG, JPG, PDF up to 25MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5E58] mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Muhammad about your current visual challenge, SKU count, and target launch timeline..."
                    className="w-full bg-[#F5F2EC] border border-[#20211E]/15 px-3.5 py-3 text-sm text-[#20211E] focus:outline-none focus:border-[#20211E] transition-colors"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] text-[#5C5E58]">
                    Strict confidentiality guaranteed for unreleased products.
                  </p>
                  <button
                    type="submit"
                    id="submit-contact-btn"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#20211E] text-[#F5F2EC] hover:bg-[#202A21] text-xs uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer"
                  >
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
