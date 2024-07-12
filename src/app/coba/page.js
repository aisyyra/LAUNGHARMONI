import { Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" style="light">
        <Button>Light tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" style="dark">
        <Button>Dark tooltip</Button>
      </Tooltip>
    </div>
  );
}