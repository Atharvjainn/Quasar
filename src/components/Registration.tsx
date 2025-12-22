import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Rocket, CheckCircle } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  teamSize: z.string().min(1, "Please select team size"),
  track: z.string().min(1, "Please select a track"),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Registration data:", data);
    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "You've been registered for Hackathon 2025. Check your email for confirmation.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="glass rounded-2xl p-10 glow-border">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                You're Registered!
              </h2>
              <p className="text-muted-foreground">
                Thank you for registering for Hackathon 2025. We've sent a confirmation 
                email with all the details you need to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Join the <span className="text-gradient">Revolution</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to build something amazing? Register now and secure your spot 
            in the most exciting hackathon of 2025.
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl p-8 glow-border"
          >
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  className="bg-background/50"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="bg-background/50"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <Label htmlFor="teamSize">Team Size</Label>
                <Select onValueChange={(value) => setValue("teamSize", value)}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo (1 person)</SelectItem>
                    <SelectItem value="duo">Duo (2 people)</SelectItem>
                    <SelectItem value="trio">Trio (3 people)</SelectItem>
                    <SelectItem value="quad">Squad (4 people)</SelectItem>
                    <SelectItem value="looking">Looking for a team</SelectItem>
                  </SelectContent>
                </Select>
                {errors.teamSize && (
                  <p className="text-sm text-destructive">{errors.teamSize.message}</p>
                )}
              </div>

              {/* Track */}
              <div className="space-y-2">
                <Label htmlFor="track">Preferred Track</Label>
                <Select onValueChange={(value) => setValue("track", value)}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select a track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-ml">AI / Machine Learning</SelectItem>
                    <SelectItem value="web3">Web3 / Blockchain</SelectItem>
                    <SelectItem value="hardware">Hardware / IoT</SelectItem>
                    <SelectItem value="general">General Coding</SelectItem>
                    <SelectItem value="undecided">Undecided</SelectItem>
                  </SelectContent>
                </Select>
                {errors.track && (
                  <p className="text-sm text-destructive">{errors.track.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg glow-border"
              >
                {isSubmitting ? (
                  "Registering..."
                ) : (
                  <>
                    <Rocket className="w-5 h-5 mr-2" />
                    Register Now
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
