export const TOGGLE_TARGETEDDD_OPEN = 'TOGGLE_TARGETEDDD_OPEN';

export function toggleTargetedDDOpen(open) {
  return {
    type: TOGGLE_TARGETEDDD_OPEN,
    payload: !open
  }
}