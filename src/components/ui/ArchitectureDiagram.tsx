import React, { useState } from 'react';
import { Camera, Cpu, Crosshair, ShieldAlert, AlertTriangle, Lock } from 'lucide-react';
import { Badge } from './Badge';

interface Stage {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ElementType;
  status: 'Demonstrated' | 'In Development' | 'Planned Architecture';
  description: string;
  technicalSpecs: {
    inputs: string;
    processing: string;
    outputs: string;
    latency: string;
  };
  safetyControl: string;
}

const STAGES: Stage[] = [
  {
    id: 'optical-capture',
    number: '01',
    title: 'Perimeter Optical Sensing',
    category: 'Sensors & I/O',
    icon: Camera,
    status: 'Demonstrated',
    description: 'Multi-camera IP array covering wide-angle perimeter corridors with continuous frame acquisition.',
    technicalSpecs: {
      inputs: 'RTSP video feeds (1080p @ 30fps), infrared low-light sensors',
      processing: 'Frame buffer decoding, hardware-accelerated color balance',
      outputs: 'Synchronized visual frame stream to inference pipeline',
      latency: '< 15 ms ingress buffer'
    },
    safetyControl: 'Local loop stream with encrypted local transmission; no external cloud leakage.'
  },
  {
    id: 'edge-inference',
    number: '02',
    title: 'Edge CNN Vision Inference',
    category: 'Edge Neural Processing',
    icon: Cpu,
    status: 'Demonstrated',
    description: 'Dedicated embedded inference engine running optimized convolutional networks for human classification.',
    technicalSpecs: {
      inputs: 'Raw preprocessed video frames',
      processing: 'CNN bounding-box detection, background subtraction, multi-scale feature maps',
      outputs: 'Class bounding boxes, person confidence scores, bounding vector coords',
      latency: '< 45 ms per frame inference'
    },
    safetyControl: 'Deterministic bounding rules; false-positive filter eliminates foliage & weather triggers.'
  },
  {
    id: 'motorized-tracking',
    number: '03',
    title: 'Dual-Axis Vector Tracking',
    category: 'Electromechanical',
    icon: Crosshair,
    status: 'Demonstrated',
    description: 'Micro-stepping closed-loop pan/tilt mount rapidly tracks verified target coordinates.',
    technicalSpecs: {
      inputs: 'Calculated centroid azimuth & elevation vectors from inference engine',
      processing: 'PID closed-loop motor trajectory planner, optical encoder feedback',
      outputs: 'Physical camera/payload alignment locked to target coordinates',
      latency: '< 120 ms mechanical alignment response'
    },
    safetyControl: 'Hardware boundary limit switches and watchdog heartbeat prevent out-of-bounds excursion.'
  },
  {
    id: 'central-alert',
    number: '04',
    title: 'Central Dispatch & Human Review',
    category: 'Operator Verification',
    icon: ShieldAlert,
    status: 'In Development',
    description: 'Multi-node telemetry hub presenting synchronized live view, bounding track, and event classification to security staff.',
    technicalSpecs: {
      inputs: 'Node telemetry, bounding vectors, event timestamp, confidence rating',
      processing: 'Multi-node deduplication, incident priority queuing, sound chime alert',
      outputs: 'Operator review workstation display with audit logs',
      latency: '< 200 ms alert distribution'
    },
    safetyControl: 'Human-in-the-loop requirement: no escalation without authenticated operator action.'
  },
  {
    id: 'response-pipeline',
    number: '05',
    title: 'Authorized Response Workflow',
    category: 'Interlock & Action',
    icon: Lock,
    status: 'Planned Architecture',
    description: 'Supervised actuator protocol for perimeter deterrence (spotlighting, audible sirens, or payload signals).',
    technicalSpecs: {
      inputs: 'Operator dual-key cryptographic authorization signature',
      processing: 'Safety interlock verification, site boundary check, regulatory validation',
      outputs: 'Trigger signal to connected non-lethal deterrent hardware',
      latency: 'Instantaneous upon verified operator confirmation'
    },
    safetyControl: 'Autonomous weapons actuation is strictly prohibited. Full hardware and software interlocks.'
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<Stage>(STAGES[1]);

  return (
    <div className="border border-brand-border rounded-sm bg-white overflow-hidden shadow-subtle">
      {/* Header bar */}
      <div className="px-6 py-4 bg-brand-navy text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase font-mono tracking-widest text-brand-slate-light">
            System Architecture Blueprint
          </div>
          <h3 className="text-base font-semibold text-white mt-0.5">
            Detect &rarr; Decide &rarr; Defend Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-brand-slate-light">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Edge Architecture v1.0</span>
        </div>
      </div>

      {/* Stage Flow Selector */}
      <div className="grid grid-cols-1 md:grid-cols-5 border-b border-brand-border bg-brand-cool-grey-light/30">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              type="button"
              className={`text-left p-4 transition-all border-b md:border-b-0 md:border-r border-brand-border relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
                isSelected
                  ? 'bg-white shadow-sm'
                  : 'hover:bg-brand-cool-grey/40 opacity-80 hover:opacity-100'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-brand-slate">
                  {stage.number}
                </span>
                <span className="text-xs font-mono text-brand-slate-light">
                  {idx < 4 ? '→' : 'END'}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? 'text-brand-red' : 'text-brand-navy'
                  }`}
                />
                <span className="text-xs font-medium text-brand-navy truncate">
                  {stage.title}
                </span>
              </div>
              <div className="mt-1">
                <Badge status={stage.status} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Pane for Selected Stage */}
      <div className="p-6 md:p-8 bg-white">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">
                Stage {selectedStage.number} • {selectedStage.category}
              </span>
              <Badge status={selectedStage.status} />
            </div>
            <h4 className="text-xl font-bold text-brand-navy">
              {selectedStage.title}
            </h4>
            <p className="text-sm text-brand-slate mt-2 max-w-2xl leading-relaxed">
              {selectedStage.description}
            </p>
          </div>

          <div className="shrink-0 bg-brand-cool-grey-light p-4 rounded-sm border border-brand-border text-xs max-w-sm">
            <div className="flex items-center gap-2 font-semibold text-brand-navy mb-1.5">
              <AlertTriangle className="w-4 h-4 text-brand-red shrink-0" />
              <span>Safety & Governance Interlock</span>
            </div>
            <p className="text-brand-slate leading-normal">
              {selectedStage.safetyControl}
            </p>
          </div>
        </div>

        {/* Technical Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="p-3.5 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm">
            <span className="text-xs font-mono uppercase text-brand-slate block mb-1">
              Data Ingress
            </span>
            <span className="text-xs font-medium text-brand-navy">
              {selectedStage.technicalSpecs.inputs}
            </span>
          </div>

          <div className="p-3.5 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm">
            <span className="text-xs font-mono uppercase text-brand-slate block mb-1">
              Processing Pipeline
            </span>
            <span className="text-xs font-medium text-brand-navy">
              {selectedStage.technicalSpecs.processing}
            </span>
          </div>

          <div className="p-3.5 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm">
            <span className="text-xs font-mono uppercase text-brand-slate block mb-1">
              Telemetry Egress
            </span>
            <span className="text-xs font-medium text-brand-navy">
              {selectedStage.technicalSpecs.outputs}
            </span>
          </div>

          <div className="p-3.5 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm">
            <span className="text-xs font-mono uppercase text-brand-slate block mb-1">
              Target Latency
            </span>
            <span className="text-xs font-mono font-semibold text-brand-navy">
              {selectedStage.technicalSpecs.latency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
