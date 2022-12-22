import { styled, keyframes } from '@lib/stitches.config'
import * as Toast from '@radix-ui/react-toast'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  title: string
  message: string
}

const VIEWPORT_PADDING = 25

const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const ToastRoot = styled(Toast.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: '$fanGreen',
  fontSize: 15,
})

const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$fanGreen',
  fontSize: 13,
  lineHeight: 1.3,
})

const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

const StyledToast = ({ isOpen, onOpenChange, title, message }: Props) => {
  return (
    <Toast.Provider swipeDirection="right">
      <ToastRoot open={isOpen} onOpenChange={onOpenChange}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{message}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  )
}

export default StyledToast
