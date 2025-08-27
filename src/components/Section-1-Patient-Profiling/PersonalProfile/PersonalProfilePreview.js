import React from "react";
import { TfiAngleUp } from "react-icons/tfi";

export default function PersonalProfilePreview({ data }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-4">Preview</h3>
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold">Personal Profile</p>
        {/* <span className="text-gray-500"><TfiAngleUp /></span> */}
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-gray-200 bg-indigo-50">
          <div className="px-3 pt-2 bg-indigo-50 rounded-t-lg font-medium text-sm">Physical Details</div>
          <div className="px-3 py-2 text-sm space-y-1">
            <p>Height: <span className="text-[#000000] font-semibold">{data.height || "--"}</span></p>
            <p>Weight: <span className="text-[#000000] font-semibold">{data.weight || "--"}</span></p>
            <p>BMI: <span className="text-[#000000] font-semibold">{data.bmi || "--"}</span></p>
            <p>Marital Status: <span className="text-[#000000] font-semibold">{data.maritalStatus || "--"}</span></p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-indigo-50">
          <div className="px-3 pt-2 bg-indigo-50 rounded-t-lg font-medium text-sm">Pregnancy History</div>
          <div className="px-3 py-2 text-sm space-y-1">
            <p>Pregnancies: <span className="text-[#000000] font-semibold">{data.pregnancies || "--"}</span></p>
            <p>Miscarriages: <span className="text-[#000000] font-semibold">{data.miscarriages || "--"}</span></p>
            <p>Stillbirths: <span className="text-[#000000] font-semibold">{data.stillbirths || "--"}</span></p>
            <p>Children: <span className="text-[#000000] font-semibold">{data.children || "--"}</span></p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-indigo-50">
          <div className="px-3 pt-2 bg-indigo-50 rounded-t-lg font-medium text-sm">Health Assessment</div>
          <div className="px-3 py-2 text-sm space-y-1">
            <p>Walking Impairment: <span className="text-[#000000] font-semibold">{data.walkingImpairment || "No"}</span></p>
            <p>Body Sensation Abnormality: <span className="text-[#000000] font-semibold">{data.bodySensationAbnormality || "No"}</span></p>
            <p>Speech Impairment: <span className="text-[#000000] font-semibold">{data.speechImpairment || "No"}</span></p>
            <p>Body Shaking: <span className="text-[#000000] font-semibold">{data.bodyShaking || "No"}</span></p>
            <p>Abnormal Hair Growth/Loss: <span className="text-[#000000] font-semibold">{data.abnormalHairGrowthLoss || "No"}</span></p>
            <p>Facial Deformity: <span className="text-[#000000] font-semibold">{data.facialDeformity || "No"}</span></p>
          </div>
        </div>

        {data.otherDisability && (
          <div className="rounded-lg border border-gray-200 bg-indigo-50">
            <div className="px-3 pt-2 bg-indigo-50 rounded-t-lg font-medium text-sm">Other Disabilities</div>
            <div className="px-3 py-2 text-sm">
              <p className="text-[#000000] font-semibold">{data.otherDisability}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
