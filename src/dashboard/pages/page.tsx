import React, { useState, useEffect, type FC } from "react";
import { dashboard } from "@wix/dashboard";
import {
  Page,
  WixDesignSystemProvider,
  Input,
  Button,
  Box,
  Text,
  ToggleSwitch,
} from "@wix/design-system";

import "@wix/design-system/styles.global.css";

const Index: FC = () => {
  const [agentId, setAgentId] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const savedAgentId = localStorage.getItem("agentzee-agent-id");
    const savedEnabled = localStorage.getItem("agentzee-enabled");

    if (savedAgentId) setAgentId(savedAgentId);
    if (savedEnabled) setEnabled(savedEnabled === "true");
  }, []);

  const saveSettings = () => {
    localStorage.setItem("agentzee-agent-id", agentId);
    localStorage.setItem("agentzee-enabled", String(enabled));

    dashboard.showToast({
      message: "Agentzee chatbot settings saved!",
    });
  };

  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page>
        <Page.Header
          title="Agentzee AI Chatbot"
          subtitle="Configure your chatbot settings."
        />

        <Page.Content>
          <Box direction="vertical" gap="20px" width="400px">

            <Text size="medium">Agent ID</Text>

            <Input
              placeholder="Enter your Agentzee Agent ID"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
            />

            <ToggleSwitch
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            >
              Enable Chatbot
            </ToggleSwitch>

            <Button onClick={saveSettings}>
              Save Settings
            </Button>

          </Box>
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default Index;