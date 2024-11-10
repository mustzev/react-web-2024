import type { Meta, StoryObj } from '@storybook/react'

import { Test } from './test'

const meta = {
  title: 'Components/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Test>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}
