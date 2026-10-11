import React, { useState } from 'react';
import { Camera, Cpu, Crosshair, Bell, ShieldCheck } from 'lucide-react';
import { Badge, StatusType } from './Badge';

interface Stage {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ElementType;
  status: StatusType;
  description: string;
  technicalSpecs: {
    inputs: string;
    processing: string;
    outputs: string;
    targetBenchmark: string;
  };
  safetyControl: string;
}

const STAGES: Stage[] = [
  {
    id: 'optical-capture',
    number: '01',
    title: 'Detect: Optical Sensing',
    category: 'Ingress & Optical Sensors',
    icon: Camera,
    status: 'Demonstrated',
    description: 'Continuous video capture from wall-mounted perimeter IP camera feeds across boundary corridors.',
    technicalSpecs: {
      inputs: 'RTSP video feeds (1080p @ 30fps), low-light optical sensors',
      processing: 'Frame buffer decoding, hardware-accelerated color and contrast normalization',
      outputs: 'Synchronized visual frame buffer dispatched to edge inference unit',
      targetBenchmark: 'Local loop stream with encrypted local transmission; zero cloud leakage'
    },
    safetyControl: 'Isolated local camera network; no external public exposure of raw video feeds.'
  },
  {
    id: 'edge-inference',
    number: '02',
    title: 'Analyze: Edge Vision Inference',
    category: 'Edge Neural Processing',
    icon: Cpu,
    status: 'Demonstrated',
    description: 'Dedicated embedded computing unit running optimized convolutional neural networks to classify human intrusion.',
    technicalSpecs: {
      inputs: 'Preprocessed raw video frames',
      processing: 'Convolutional neural network human classification, background subtraction, noise filtering',
      outputs: 'Classified bounding boxes, person confidence metrics, spatial vector centroid',
      targetBenchmark: 'Eliminates false triggers caused by windblown foliage, shadows, and animals'
    },
    safetyControl: 'Deterministic classification rules; alerts filtered before dispatch to eliminate operator alarm fatigue.'
  },
  {
    id: 'motorized-tracking',
    number: '03',
    title: 'Target: Dual-Axis Orientation',
    category: 'Electromechanical Mount',
    icon: Crosshair,
    status: 'Demonstrated',
    description: 'Precision dual-motor mount slews azimuth and elevation to align optical tracking with calculated intrusion coordinates.',
    technicalSpecs: {
      inputs: 'Centroid coordinate vectors from edge inference pipeline',
      processing: 'Closed-loop micro-stepping motor kinematics with optical encoder feedback',
      outputs: 'Continuous 360° mechanical orientation aligned with verified target path',
      targetBenchmark: 'High-torque micro-stepping drive with physical limit switches'
    },
    safetyControl: 'Hardware boundary limit switches and watchdog heartbeat prevent out-of-bounds excursion.'
  },
  {
    id: 'alert-dispatch',
    number: '04',
    title: 'Alert: Real-Time Event Dispatch',
    category: 'Network & Telemetry',
    icon: Bell,
    status: 'In Development',
    description: 'Low-latency telemetry event transmitted across local security bus to central operations console and VMS.',
    technicalSpecs: {
      inputs: 'Spatial coordinates, intrusion timestamp, confidence rating, sensor ID',
      processing: 'Multi-node event correlation, priority queueing, incident packaging',
      outputs: 'Structured JSON telemetry event and synchronized video clip to operator console',
      targetBenchmark: 'Standard ONVIF and RTSP metadata overlay stream'
    },
    safetyControl: 'Encrypted network telemetry; automated physical actuation is non-existent at this stage.'
  },
  {
    id: 'human-review',
    number: '05',
    title: 'Review: Human Verification',
    category: 'Operator Verification',
    icon: ShieldCheck,
    status: 'Validated',
    description: 'Security operator reviews live optical stream, verifies classified target, and executes approved response protocol.',
    technicalSpecs: {
      inputs: 'Verified alert notification, high-resolution visual feed, target track history',
      processing: 'Operator review workstation display with audit logging and timestamped confirmation',
      outputs: 'Authorized response procedures (audible warning, spotlighting, or guard dispatch)',
      targetBenchmark: 'Immutable audit log recording operator identification and action timestamp'
    },
    safetyControl: 'Non-negotiable architectural rule: zero physical deterrent escalation without authenticated human authorization.'
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<Stage>(STAGES[1]);

  return (
    <div className="bg-white border border-brand-border rounded-lg shadow-card overflow-hidden">
      {/* Header bar */}
      <div className="px-6 py-4 bg-brand-navy text-white flex flex-wrap items-center justify-between gap-4 border-b border-brand-navy-surface">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-xs uppercase font-mono font-medium tracking-wider text-slate-300">
              Operational Pipeline Architecture
            </span>
          </div>
          <h3 className="text-lg font-bold tracking-tight text-white mt-0.5">
            Detect &rarr; Analyze &rarr; Alert &rarr; Human Review Workflow
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-brand-navy-surface px-3 py-1 rounded border border-slate-700">
          <span>Bench Architecture v1.0</span>
        </div>
      </div>

      {/* Stage Flow Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-brand-border bg-brand-cool-grey-light/50">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              type="button"
              className={`text-left p-4 transition-all border-b lg:border-b-0 lg:border-r border-brand-border relative focus:outline-none focus:ring-2 focus:ring-brand-red ${
                isSelected
                  ? 'bg-white shadow-subtle border-b-2 border-b-brand-red'
                  : 'hover:bg-brand-cool-grey-light text-brand-slate'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-brand-navy text-white' : 'bg-brand-cool-grey text-brand-slate'
                  }`}
                >
                  {stage.number}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {idx < 4 ? '→' : 'FINAL'}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`p-1 rounded ${
                    isSelected ? 'text-brand-red' : 'text-brand-slate'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-brand-navy truncate">
                  {stage.title}
                </span>
              </div>
              <div>
                <Badge status={stage.status} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Pane for Selected Stage */}
      <div className="p-6 md:p-8 bg-white space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-brand-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-semibold text-brand-red uppercase tracking-wider">
                STAGE {selectedStage.number} • {selectedStage.category}
              </span>
              <Badge status={selectedStage.status} />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
              {selectedStage.title}
            </h4>
            <p className="text-sm text-brand-slate max-w-2xl leading-relaxed">
              {selectedStage.description}
            </p>
          </div>

          <div className="shrink-0 bg-brand-cool-grey-light p-4 rounded-md border border-brand-border text-xs max-w-sm space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-brand-navy">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Safety & Governance Interlock</span>
            </div>
            <p className="text-brand-slate leading-relaxed">
              {selectedStage.safetyControl}
            </p>
          </div>
        </div>

        {/* Technical Parameters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-brand-cool-grey-light/50 rounded-md border border-brand-border space-y-1">
            <span className="text-[11px] font-mono font-semibold uppercase text-brand-slate block">
              Data Ingress
            </span>
            <span className="text-xs font-medium text-brand-navy block leading-relaxed">
              {selectedStage.technicalSpecs.inputs}
            </span>
          </div>

          <div className="p-4 bg-brand-cool-grey-light/50 rounded-md border border-brand-border space-y-1">
            <span className="text-[11px] font-mono font-semibold uppercase text-brand-slate block">
              Processing Pipeline
            </span>
            <span className="text-xs font-medium text-brand-navy block leading-relaxed">
              {selectedStage.technicalSpecs.processing}
            </span>
          </div>

          <div className="p-4 bg-brand-cool-grey-light/50 rounded-md border border-brand-border space-y-1">
            <span className="text-[11px] font-mono font-semibold uppercase text-brand-slate block">
              Telemetry Egress
            </span>
            <span className="text-xs font-medium text-brand-navy block leading-relaxed">
              {selectedStage.technicalSpecs.outputs}
            </span>
          </div>

          <div className="p-4 bg-brand-cool-grey-light/50 rounded-md border border-brand-border space-y-1">
            <span className="text-[11px] font-mono font-semibold uppercase text-brand-slate block">
              Engineering Benchmark
            </span>
            <span className="text-xs font-medium text-brand-navy block leading-relaxed">
              {selectedStage.technicalSpecs.targetBenchmark}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
