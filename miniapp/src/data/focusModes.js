const focusModes = [
  {
    id: 'study',
    path: '/study',
    icon: '📚',
    name: 'Study',
    description: 'Un espace calme pour apprendre, relire et avancer.',
    homeTheme:
      'bg-[#EEF2FF] dark:bg-[#111827]',
    card:
      'focus:ring-[#6366F1]/40 focus:ring-offset-[#EEF2FF] dark:focus:ring-[#C4B5FD]/40 dark:focus:ring-offset-[#111827]',
    selectedCard:
      'border-[#6366F1] bg-white text-[#312E81] ring-2 ring-[#6366F1]/35 shadow-[0_24px_58px_rgba(99,102,241,0.20)] dark:border-[#C4B5FD] dark:bg-[#1E1B4B] dark:text-[#EDE9FE] dark:ring-[#C4B5FD]/40 dark:shadow-[0_24px_58px_rgba(0,0,0,0.34)]',
    idleCard:
      'border-[#C7D2FE] bg-white/75 text-[#3730A3] hover:border-[#818CF8] hover:bg-white dark:border-[#4338CA]/60 dark:bg-[#1E1B4B]/55 dark:text-[#DDD6FE] dark:hover:border-[#A78BFA] dark:hover:bg-[#312E81]/60',
    toggle:
      'border-indigo-300/70 bg-[#4F46E5] text-white shadow-[0_12px_28px_rgba(79,70,229,0.26)] hover:bg-[#4338CA] hover:shadow-[0_16px_34px_rgba(79,70,229,0.34)] focus:ring-[#6366F1]/40 focus:ring-offset-[#EEF2FF] dark:border-violet-300/40 dark:bg-[#C4B5FD] dark:text-[#111827] dark:shadow-[0_12px_28px_rgba(196,181,253,0.18)] dark:hover:bg-[#DDD6FE] dark:focus:ring-[#C4B5FD]/40 dark:focus:ring-offset-[#111827]',
    accent:
      'border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#5B21B6] dark:border-[#A78BFA] dark:bg-[#A78BFA]/15 dark:text-[#DDD6FE]',
    pageTheme:
      'bg-gradient-to-br from-[#EDE9FE] via-[#DBEAFE] to-[#F5F3FF] dark:from-[#17121F] dark:via-[#1E1B4B] dark:to-[#111827]',
    panel:
      'border-[#A78BFA]/60 bg-white/75 dark:border-[#7C3AED]/50 dark:bg-[#201A32]/82',
    button:
      'bg-[#7C3AED] text-white hover:bg-[#6D28D9] focus:ring-[#8B5CF6]/40',
    title: 'Study Mode',
    summaryTitle: 'Ready to focus?',
    summaryText: 'Take a moment to learn and make progress.',
    pageText:
      'Installe un rythme clair pour rester concentre, reviser avec intention et avancer dans ton apprentissage sans te disperser.',
  },
  {
    id: 'creative',
    path: '/creative',
    icon: '🎨',
    name: 'Creative',
    description: 'Un mode ouvert pour dessiner, ecrire et imaginer.',
    homeTheme:
      'bg-[#FFF1F2] dark:bg-[#1F1117]',
    card:
      'focus:ring-[#F43F5E]/40 focus:ring-offset-[#FFF1F2] dark:focus:ring-[#FDA4AF]/40 dark:focus:ring-offset-[#1F1117]',
    selectedCard:
      'border-[#F43F5E] bg-white text-[#9F1239] ring-2 ring-[#F43F5E]/35 shadow-[0_24px_58px_rgba(244,63,94,0.20)] dark:border-[#FDA4AF] dark:bg-[#451A2C] dark:text-[#FFE4E6] dark:ring-[#FB7185]/40 dark:shadow-[0_24px_58px_rgba(0,0,0,0.34)]',
    idleCard:
      'border-[#FECDD3] bg-white/75 text-[#BE123C] hover:border-[#FB7185] hover:bg-white dark:border-[#9F1239]/60 dark:bg-[#3B1423]/60 dark:text-[#FFE4E6] dark:hover:border-[#FB7185] dark:hover:bg-[#4A1D2D]/70',
    toggle:
      'border-rose-300/70 bg-[#E11D48] text-white shadow-[0_12px_28px_rgba(225,29,72,0.24)] hover:bg-[#BE123C] hover:shadow-[0_16px_34px_rgba(225,29,72,0.32)] focus:ring-[#F43F5E]/40 focus:ring-offset-[#FFF1F2] dark:border-pink-200/40 dark:bg-[#F9A8D4] dark:text-[#1F1117] dark:shadow-[0_12px_28px_rgba(244,114,182,0.18)] dark:hover:bg-[#FBCFE8] dark:focus:ring-[#F9A8D4]/40 dark:focus:ring-offset-[#1F1117]',
    accent:
      'border-[#EC4899] bg-[#EC4899]/10 text-[#BE185D] dark:border-[#F472B6] dark:bg-[#F472B6]/15 dark:text-[#FBCFE8]',
    pageTheme:
      'bg-gradient-to-br from-[#FFF1F2] via-[#FCE7F3] to-[#FFE4E6] dark:from-[#2A1321] dark:via-[#4A1230] dark:to-[#1F1117]',
    panel:
      'border-[#FB7185]/60 bg-white/75 dark:border-[#F472B6]/50 dark:bg-[#2A1720]/82',
    button:
      'bg-[#DB2777] text-white hover:bg-[#BE185D] focus:ring-[#EC4899]/40',
    title: 'Creative Mode',
    summaryTitle: 'Let your ideas flow.',
    summaryText: 'Create, experiment and imagine.',
    pageText:
      'Laisse de la place aux idees, aux essais rapides et aux associations libres pour transformer une intuition en quelque chose de concret.',
  },
  {
    id: 'chill',
    path: '/chill',
    icon: '🌿',
    name: 'Chill',
    description: 'Une ambiance douce pour souffler et ralentir.',
    homeTheme:
      'bg-[#F0FDF4] dark:bg-[#071A12]',
    card:
      'focus:ring-[#22C55E]/40 focus:ring-offset-[#F0FDF4] dark:focus:ring-[#86EFAC]/40 dark:focus:ring-offset-[#071A12]',
    selectedCard:
      'border-[#22C55E] bg-white text-[#166534] ring-2 ring-[#22C55E]/35 shadow-[0_24px_58px_rgba(34,197,94,0.18)] dark:border-[#86EFAC] dark:bg-[#123524] dark:text-[#DCFCE7] dark:ring-[#86EFAC]/35 dark:shadow-[0_24px_58px_rgba(0,0,0,0.34)]',
    idleCard:
      'border-[#BBF7D0] bg-white/75 text-[#15803D] hover:border-[#4ADE80] hover:bg-white dark:border-[#166534]/70 dark:bg-[#10251A]/70 dark:text-[#DCFCE7] dark:hover:border-[#86EFAC] dark:hover:bg-[#123524]/80',
    toggle:
      'border-emerald-300/70 bg-[#16A34A] text-white shadow-[0_12px_28px_rgba(22,163,74,0.23)] hover:bg-[#15803D] hover:shadow-[0_16px_34px_rgba(22,163,74,0.31)] focus:ring-[#22C55E]/40 focus:ring-offset-[#F0FDF4] dark:border-emerald-200/40 dark:bg-[#86EFAC] dark:text-[#071A12] dark:shadow-[0_12px_28px_rgba(134,239,172,0.16)] dark:hover:bg-[#BBF7D0] dark:focus:ring-[#86EFAC]/40 dark:focus:ring-offset-[#071A12]',
    accent:
      'border-[#22C55E] bg-[#22C55E]/10 text-[#15803D] dark:border-[#4ADE80] dark:bg-[#4ADE80]/15 dark:text-[#BBF7D0]',
    pageTheme:
      'bg-gradient-to-br from-[#DCFCE7] via-[#ECFDF5] to-[#F0FDFA] dark:from-[#10251A] dark:via-[#123524] dark:to-[#0F1F1D]',
    panel:
      'border-[#86EFAC]/70 bg-white/75 dark:border-[#22C55E]/40 dark:bg-[#14261D]/82',
    button:
      'bg-[#16A34A] text-white hover:bg-[#15803D] focus:ring-[#22C55E]/40',
    title: 'Chill Mode',
    summaryTitle: 'Time to slow down.',
    summaryText: 'Relax and take a little break.',
    pageText:
      'Ralentis doucement, respire plus large et garde un moment simple pour retrouver du calme avant de repartir.',
  },
]

export function getFocusMode(modeId) {
  return focusModes.find((mode) => mode.id === modeId)
}

export default focusModes
