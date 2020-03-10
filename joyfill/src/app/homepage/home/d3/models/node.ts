export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  
  id: number;
  name: string;
  value: number;
  group: number;

  constructor(nodeArray) {
    this.id = nodeArray.id;
    this.name = nodeArray.name;
    this.value = nodeArray.value;
    this.group = nodeArray.group;
  }

  get r() {
    return (this.value / 2);
  }

  get fontSize() {
    return '20px';
  }

  get dy() {
    return (this.value / 2) * 1.3 + 'px';
  }

  get color() {
    return 'rgb(128,186,236)';
  }
}
