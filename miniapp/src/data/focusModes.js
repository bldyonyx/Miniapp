const focusModes = [
  {
    id: 'study',
    path: '/study',
    icon: 'ST',
    name: 'Study',
    description: 'Un espace calme pour apprendre, relire et avancer.',
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
    icon: 'CR',
    name: 'Creative',
    description: 'Un mode ouvert pour dessiner, ecrire et imaginer.',
    accent:
      'border-[#EC4899] bg-[#EC4899]/10 text-[#BE185D] dark:border-[#F472B6] dark:bg-[#F472B6]/15 dark:text-[#FBCFE8]',
    pageTheme:
      'bg-gradient-to-br from-[#FFE4E6] via-[#FED7AA] to-[#FFF7ED] dark:from-[#2A1321] dark:via-[#431407] dark:to-[#1F1218]',
    panel:
      'border-[#FB7185]/60 bg-white/75 dark:border-[#FB923C]/50 dark:bg-[#2A1720]/82',
    button:
      'bg-[#EA580C] text-white hover:bg-[#C2410C] focus:ring-[#F97316]/40',
    title: 'Creative Mode',
    summaryTitle: 'Let your ideas flow.',
    summaryText: 'Create, experiment and imagine.',
    pageText:
      'Laisse de la place aux idees, aux essais rapides et aux associations libres pour transformer une intuition en quelque chose de concret.',
  },
  {
    id: 'chill',
    path: '/chill',
    icon: 'CH',
    name: 'Chill',
    description: 'Une ambiance douce pour souffler et ralentir.',
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
