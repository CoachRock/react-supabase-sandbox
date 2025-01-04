"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface OutsideInvitationModalProps {
  children: React.ReactNode;
}

export function OutsideInvitationModal({ children }: OutsideInvitationModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [expiration, setExpiration] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    console.log("Sending invitation to:", {
      firstName,
      lastName,
      email,
      expiration
    });
    setIsOpen(false);
    // Reset form
    setFirstName("");
    setLastName("");
    setEmail("");
    setExpiration("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Invite Outside Candidate</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="E-Mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiration">Invite Expiration</Label>
            <Select value={expiration} onValueChange={setExpiration}>
              <SelectTrigger>
                <SelectValue placeholder="Select Invite Deadline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24 Hours</SelectItem>
                <SelectItem value="48h">48 Hours</SelectItem>
                <SelectItem value="72h">72 Hours</SelectItem>
                <SelectItem value="1w">1 Week</SelectItem>
                <SelectItem value="2w">2 Weeks</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSubmit}
            disabled={!firstName || !lastName || !email || !expiration}
          >
            Send Invitation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}