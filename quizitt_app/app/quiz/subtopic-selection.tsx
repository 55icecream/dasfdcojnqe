import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { quizAPI } from '../../services/api';

interface Subtopic {
  subtopic_id: number;
  subtopic_name: string;
}

export default function SubtopicSelection() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { subject, chapterId, chapterName } = params;
  
  const [subtopics, setSubtopics] = useState<Subtopic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubtopics();
  }, []);

  const loadSubtopics = async () => {
    try {
      let response;
      const chapterIdNum = parseInt(chapterId as string);
      
      switch (subject) {
        case 'Physics':
          response = await quizAPI.getPhysicsSubtopics(chapterIdNum);
          break;
        case 'Chemistry':
          response = await quizAPI.getChemistrySubtopics(chapterIdNum);
          break;
        case 'Biology':
          response = await quizAPI.getBiologySubtopics(chapterIdNum);
          break;
        case 'Mathematics':
          response = await quizAPI.getMathsSubtopics(chapterIdNum);
          break;
        default:
          throw new Error('Invalid subject');
      }
      
      setSubtopics(response.data);
    } catch (error) {
      console.error('Error fetching subtopics:', error);
      Alert.alert('Error', 'Failed to load subtopics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubtopicSelect = (subtopic: Subtopic) => {
    router.push({
      pathname: '/quiz/quiz-types',
      params: {
        subject,
        chapterId,
        chapterName,
        subtopicId: subtopic.subtopic_id,
        subtopicName: subtopic.subtopic_name,
      },
    });
  };

  const getSubjectColor = () => {
    switch (subject) {
      case 'Physics': return '#E92125';
      case 'Chemistry': return '#6B96E6';
      case 'Biology': return '#54C025';
      case 'Mathematics': return '#FFC100';
      default: return '#9C73F4';
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222B40' }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        {/* Header */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 20,
        }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: '#1E2A3A',
              borderRadius: 10,
              padding: 10,
              marginRight: 15,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>← Back</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={{
              color: '#FFFFFF',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
              {subject} - Chapter {chapterId}
            </Text>
            <Text style={{
              color: '#ABABAB',
              fontSize: 14,
              marginTop: 2,
            }}>
              {chapterName}
            </Text>
          </View>
        </View>

        <Text style={{
          color: '#FFFFFF',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
          Choose a Subtopic
        </Text>

        {loading ? (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
            <ActivityIndicator size="large" color="#9C73F4" />
            <Text style={{
              color: '#FFFFFF',
              marginTop: 10,
              fontSize: 16,
            }}>
              Loading subtopics...
            </Text>
          </View>
        ) : (
          <View style={{ gap: 15 }}>
            {subtopics.map((subtopic) => (
              <TouchableOpacity
                key={subtopic.subtopic_id}
                onPress={() => handleSubtopicSelect(subtopic)}
                style={{
                  backgroundColor: '#1E2A3A',
                  borderRadius: 12,
                  padding: 18,
                  borderLeftWidth: 4,
                  borderLeftColor: getSubjectColor(),
                }}
              >
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                      {subtopic.subtopic_id}
                    </Text>
                    <Text style={{
                      color: '#ABABAB',
                      fontSize: 14,
                      lineHeight: 20,
                    }}>
                      {subtopic.subtopic_name}
                    </Text>
                  </View>
                  <Text style={{
                    color: getSubjectColor(),
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                    →
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}