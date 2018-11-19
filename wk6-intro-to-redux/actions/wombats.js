export function addWombatAction(wombat) {
  return {
    type: 'ADD_WOMBAT',
    wombat: wombat
  }
}

export function updateWombatAction(wombat, newWombat) {
  return {
    type: 'UPDATE_WOMBAT',
    wombat: wombat,
    newWombat: newWombat
  }
}
